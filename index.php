<!DOCTYPE html>
<html>
<head>
    <title>Aristote Puzzle</title>
    <link rel="stylesheet" href="style.css" />
    <script type="application/javascript" src="bower_components/jquery/jquery.min.js"></script>
</head>
<body>
<table width="100%">
    <tr>
        <td width="50%">
            <div class="puzzle">
            </div>
        </td>
        <td width="50%">
            <div class="result">
                <div class="search" style="display: none;"><span>Recherche en cours...</span></div>
                <div class="count" style="display: none;"><span>Nombre de solution trouv&eacute;e : </span><span id="count"></span></div>
                <div class="ms" style="display: none;"><span>Temps d&apos;ex&eacute;cution (s) : </span><span id="ms"></span></div>
                <br/>
                <div class="consigne"><span>Cliquer sur un hexagone.</span></div>
            </div>
        </td>
    </tr>
</table>
<script type="application/javascript" src="resolve.js"></script>
</body>
</html>
