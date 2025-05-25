document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // 새로고침 방지.

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    fetchLoginStatus(email, password)



});

function fetchLoginStatus(email, password) {

    $.ajax({
        url: `/login1?email=${email}&pw=${password}`,
        success: function(status){
            if (Number(status) === 200){
                alert("로그인 성공")
                window.location.href = '/mid3'
            } else {
                alert("로그인 실패")
            }
        }
    });

}


