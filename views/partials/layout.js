
module.exports = ({ content }) => {

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
        <nav id="mainNavbar" class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top pl-5">
            <a class="navbar-brand brandnav" href="#">CARSTACK</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
                <div class="collapse navbar-collapse pl-5" id="navbarNav">
                    <ul class="navbar-nav ">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">SEARCH</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">ABOUT</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">FINANCING</a>
                    </li>
                    </ul>
              </div>
      </nav>
    ${content}
    <!--Bootstraop javascript-->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</body>

</html>
`

}