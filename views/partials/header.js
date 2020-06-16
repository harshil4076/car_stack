
module.exports = () => {
return `
<!DOCTYPE html>
<head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--Bootstrap Css-->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
         <!--Google Font-->
         <link href="https://fonts.googleapis.com/css?family=Titillium+Web&display=swap" rel="stylesheet">
         <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet">
         <!--Custom Css file-->
         <link rel="stylesheet" type="text/css" href="../main.css">
         <!--Material Icon -->
         <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">

</head>
<body class="m3-3 mt-5 pt-2 px-">
        <nav id="mainNavbar" class="navbar navbar-dark navbar-custom fixed-top">
                <a class=" brandnav px-lg-5" href="/">CARSTACK</a>
        <button class="toggle-button" onclick="myFunction()">
            <i class="material-icons">
                menu
                </i>
                    </button>
      </nav>
        `
}
