export default function loginPage() {
    return (
       <form className="login" action="">
        <h1>Login</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
        </form>
    );
}
