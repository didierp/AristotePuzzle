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
            <div>
                <div class="puzzle">
                    <div>
                        <div class="hexagon a"><span class="index_puzzle" id="a_index" data-id="a">??</span></div>
                        <div class="hexagon b"><span class="index_puzzle" id="b_index" data-id="b">??</span></div>
                        <div class="hexagon c"><span class="index_puzzle" id="c_index" data-id="c">??</span></div>
                    </div>
                    <div>
                        <div class="hexagon d"><span class="index_puzzle" id="d_index" data-id="d">??</span></div>
                        <div class="hexagon e"><span class="index_puzzle" id="e_index" data-id="e">??</span></div>
                        <div class="hexagon f"><span class="index_puzzle" id="f_index" data-id="f">??</span></div>
                        <div class="hexagon g"><span class="index_puzzle" id="g_index" data-id="g">??</span></div>
                    </div>
                    <div>
                        <div class="hexagon h"><span class="index_puzzle" id="h_index" data-id="h">??</span></div>
                        <div class="hexagon i"><span class="index_puzzle" id="i_index" data-id="i">??</span></div>
                        <div class="hexagon j"><span class="index_puzzle" id="j_index" data-id="j">??</span></div>
                        <div class="hexagon k"><span class="index_puzzle" id="k_index" data-id="k">??</span></div>
                        <div class="hexagon l"><span class="index_puzzle" id="l_index" data-id="l">??</span></div>
                    </div>
                    <div>
                        <div class="hexagon m"><span class="index_puzzle" id="m_index" data-id="m">??</span></div>
                        <div class="hexagon n"><span class="index_puzzle" id="n_index" data-id="n">??</span></div>
                        <div class="hexagon o"><span class="index_puzzle" id="o_index" data-id="o">??</span></div>
                        <div class="hexagon p"><span class="index_puzzle" id="p_index" data-id="p">??</span></div>
                    </div>
                    <div>
                        <div class="hexagon q"><span class="index_puzzle" id="q_index" data-id="q">??</span></div>
                        <div class="hexagon r"><span class="index_puzzle" id="r_index" data-id="r">??</span></div>
                        <div class="hexagon s"><span class="index_puzzle" id="s_index" data-id="s">??</span></div>
                    </div>
                </div>
            </div>
        </td>
        <td width="50%">
            <div class="result">
                <div class="search" style="display: none;"><span>Recherche en cours...</span></div>
                <div class="count" style="display: none;"><span>Nombre de solution trouv&eacute;e : </span><span id="count"></span></div>
                <div class="ms" style="display: none;"><span>Temps d&apos;exécution (s) : </span><span id="ms"></span></div>
                <br/>
                <div class="consigne"><span>Cliquer sur un hexagone.</span></div>
            </div>
        </td>
    </tr>
</table>
<script type="application/javascript" src="resolve.js"></script>
</body>
</html>
