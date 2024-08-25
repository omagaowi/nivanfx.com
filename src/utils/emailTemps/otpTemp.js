const OTPTemplateLoggedin = (otp, login, year) => {
    const html = `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Verification Code</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                }
                .container {
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #fff;
                    padding: 20px;
                }
                .header {
                    background-color: #7b00ff;
                    padding: 20px;
                    text-align: center;
                    color: white;
                    font-size: 24px;
                    font-weight: bold;
                }
                .content {
                    text-align: center;
                    padding: 20px;
                    background-image: linear-gradient(180deg, rgb(255, 255, 255) 39%, rgb(255, 255, 255, .7)),
    linear-gradient(45deg, rgb(255, 255, 255, .2) 10%, rgb(139, 0, 255));
                }
                .content h1 {
                    color: #333;
                    font-size: 24px;
                    margin-bottom: 20px;
                }
                .content p {
                    font-size: 16px;
                    color: #555;
                }
                .content .code {
                    font-size: 32px;
                    color: #333;
                    margin: 20px 0;
                }
                .footer {
                    text-align: center;
                    padding: 20px;
                    font-size: 12px;
                    color: #777;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    Here is your 6 digit verification code
                </div>
                <div class="content">
                    <h1>Welcome back ! </h1>
                    <p>
                      Hello ${login.first_name} ${login.last_name}
                    </p>
                    <p>Your 6 digit verification code is:</p>
                    <p class="code">${otp}</p>
                </div>
                <div class="footer">
                    &copy; ${year} Nivan FX. All rights reserved.
                </div>
            </div>
        </body>
    </html>
    `
    return html
}

const OTPTemplateLoggedOut = (otp, year) => {
  const html = `
         <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Verification Code</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                }
                .container {
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #fff;
                    padding: 20px;
                }
                .header {
                    background-color: #7b00ff;
                    padding: 20px;
                    text-align: center;
                    color: white;
                    font-size: 24px;
                    font-weight: bold;
                }
                .content {
                    text-align: center;
                    padding: 20px;
                    background-image: linear-gradient(180deg, rgb(255, 255, 255) 39%, rgb(255, 255, 255, .7)),
    linear-gradient(45deg, rgb(255, 255, 255, .2) 10%, rgb(139, 0, 255));
                }
                .content h1 {
                    color: #333;
                    font-size: 24px;
                    margin-bottom: 20px;
                }
                .content p {
                    font-size: 16px;
                    color: #555;
                }
                .content .code {
                    font-size: 32px;
                    color: #333;
                    margin: 20px 0;
                }
                .footer {
                    text-align: center;
                    padding: 20px;
                    font-size: 12px;
                    color: #777;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    Here is your 6 digit verification code
                </div>
                <div class="content">
                    <h1>
                     Welcome to Nivan FX !
                    </h1>
                    <p>
                     We are so exicited to have you on board!
                    </p>
                    <p>Your 6 digit verification code is:</p>
                    <p class="code">${otp}</p>
                </div>
                <div class="footer">
                    &copy; ${year} Nivan FX. All rights reserved.
                </div>
            </div>
        </body>
    </html>
    `;
    return html;
};

export { OTPTemplateLoggedin, OTPTemplateLoggedOut }