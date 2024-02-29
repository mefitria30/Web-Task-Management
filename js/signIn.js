// file ini untuk penghubung antara UI HTML dan model User

document.addEventListener( 'DOMContentLoaded', () =>
{
    const userForm = document.getElementById( 'userForm' )
    
    const userManager = new User();

    userForm.addEventListener( 'submit', ( e ) =>
    {
        e.preventDefault();

        const usernameByInput= document.getElementById( 'username' ).value

        const result = userManager.signInUser( usernameByInput )
        
        if ( result.success )
        {
            // alert('success logged in')
            localStorage.setItem( 'usernameLoggedIn', usernameByInput )
            return window.location.href = '../tasks.html'
        } else
        {
            alert('Username tidak ditemukan')
            console.log(result.message)
        }
    })
})