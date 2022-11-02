<?
	include "include/top.php";
?>    
<body 
    data0="background-color: rgb(191, 217, 98);"
    data500="background-color: rgb(228, 237, 146);">
    <div class="wrapper">
        <div class="sticker">
            <div class="reveal circle_wrapper">
                <div class="circle"
                    data0="opacity: 0;"
                    data20="opacity: 1;">
                    <a href="content/home.php" title="Say hello!">SHOW MORE</a>
                </div>
            </div>
                  
            <div
                class="sticky"
                data0="transform: rotate(35deg);"
                data500="transform: rotate(5deg);">
                <div
                    class="front circle_wrapper"
                    data0="height: 280px;"
                    data500="height: 0px;">
                    <div
                        class="circle" 
                        data0="margin-top: 0px; 
                                background-color: rgb(76, 170, 78);
                                box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 3px, inset -8px -4px 12px 0px #21623a;" 
                        data500="margin-top: -280px; 
                                background-color: rgb(191, 217, 98);">
                    </div>
                </div>
            </div>
            
            <h1
                data130="opacity:1;"
                data140="opacity:0;">
                MOHYUNGNAN<br>PORTFOLIO
            </h1>
                                
            <div
                class="sticky"
                data0="transform: rotate(35deg);"
                data500="transform: rotate(5deg);">
                <div
                    class="back circle_wrapper" 
                    data0="height: 0px; top: 0px;" 
                    data500="height: 280px; top: 280px; transform: translateY(0px); opacity: 1;"
                    data520="transform: translateY(200px); opacity: 0;">
                    <div
                        class="circle"
                        data0="margin-top: -280px; box-shadow: 0 1px 4px rgba(200,0,0,.3);"
                        data500="margin-top: 0px; box-shadow: 0 1px 8px rgba(0,0,0,.0);">
                    </div>
                </div>
            </div>
                                
        </div>
        <div
            class="call-to-action"
            data0="opacity: 0;"
            data500="opacity: 0;"
            data501="opacity: 1; transform: scale(0.75);"
            data520="transform: scale(1.25);"
            data530="transform: scale(1);">
            <a
                href="content/home.php"
                title="Say hello!">
                뭐라고 적지 일단 들어오셈><
            </a>
        </div>
        <div class="info"><span>Scroll</span></div>
    </div>
</body>

	<script>
		$(document).ready(function(e){
			skrollr.init();
		});
	</script>
</html>