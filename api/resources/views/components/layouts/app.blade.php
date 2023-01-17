<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Reporte - {{ $title ?? '' }}</title>
    <meta name="description" content="{{ $metaDescription ?? 'Walter_Portafolio' }}" />
    <style> 
        h1 {
          text-align: center;
        }
  
        #customers {
          font-family: Arial, Helvetica, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }
  
        #customers td,
        #customers th
         {
          border: 2px solid white;
          padding: 8px;
          background-color: rgb(38, 100, 48);
          border: 1px solid black;
          color: white;
        }
  
        #customers tr:nth-child(even) {
          background-color: aquamarine;
        }
  
        #customers tr:hover {
          background-color: blue;
        }
        
        #customers td {
          padding-top: 10px;
          padding-bottom: 10px;
          text-align: left;
          background-color: white;
          color: black;
          border: 1px solid black;
          text-align: justify;
        }
  
        #a {
           width: 40px;
           text-align: center;
           margin: auto;

        }

        .empleados {
          color: black;
          font-family: Arial, Helvetica, sans-serif;
          border-collapse: collapse;
          width: 100%;

        }

        .titulo {
          background-color: rgb(4, 203, 100);
          color: white;
        }
        .b , .a1, .a0 {
          text-align: center;
          border: 1px solid black;
        }
        .a, .a0{
          width: 30px;
          border: 1px solid black;
        }

        .c {
          width: 60px;
          padding: 3px
        }
      </style>
    
</head>

<body>
    {{ $slot }}
</body>

</html>