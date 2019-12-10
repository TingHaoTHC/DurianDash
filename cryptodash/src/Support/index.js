var NewComponent = React.createClass({
    render: function() {
        return (
            <div>
                <title>Durain Trading Tool</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="supportStyle" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" />
                <link rel="stylesheet" href="../css/supportStyle.css" />
                {/* top bar */}
                <div>
                    <div className="img-fluid">
                    </div>
                    <div className="navbar fadeIn">
                        <a href="Pages/Assets.html">Assets</a>
                        <a href="login.html">Login</a>
                        <a href="Registration.html">Register</a>
                        <a href="../index.html">Home</a>
                        <a href="../index.html" id="logo" />
                    </div>
                </div>
                {/* Main */}
                <div>
                    <div className="jumbotron " id="img_three">
                        <h1 id="title"> Support / Bug Reports</h1>
                        <form action="/action_page.php">
                            <table className="supportContainer">
                                <tbody>
                                <tr>
                                    <th> Email address </th>
                                    <td>
                                        <input name="email" type="email" placeholder="Your email address" className="w-full " defaultValue cols={25} />
                                    </td>
                                </tr>
                                <tr>
                                    <th className="md:reveal">  Subject </th>
                                    <td>
                                        <input type="text" name="subject" placeholder="Subject" className="w-full" defaultValue cols={25} />
                                    </td>
                                </tr>
                                <tr>
                                    <th className="md:reveal"> Message </th>
                                    <td>
                                        <textarea name="message" placeholder="...Message" className="w-full" value rows={4} cols={25} defaultValue={"                            "} />
                                    </td>
                                </tr>
                                <tr><td id="submit">
                                    <input type="submit" disable className="button" defaultValue="Submit" />
                                </td>
                                </tr></tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
});