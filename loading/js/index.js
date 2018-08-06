window.onload = function()
{
	var loadbar = document.getElementById("loadBar").getElementsByTagName("span")[0];
	var percent = document.getElementById("percent");
	var num = 0;
	var flag = setInterval
	(
		function()
		{
			num < 100 ? (num++, percent.innerHTML = loadbar.style.width = num + "%") : clearInterval(flag);
		},10
	);
};
