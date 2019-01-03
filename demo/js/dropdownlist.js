window.onload = function()
{
	var dlList = document.getElementsByClassName("dlList");
	for(var i = 0, j = dlList.length; i < j; i ++)
	{
		var input = document.createElement("input");
		input.id = input.name = dlList[i].id;
		input.type = "hidden";
		
		var dl = document.createElement("dl");
		dlList.index = i;
		var option = dlList[i].getElementsByTagName("option");
		var len = option.length;
		var dt = null;
		for(var k = 0, m = len - 1; k < len; k++, m--)
		{
			if(!k)
			{
				dt = document.createElement("dt"); 0
				var span = document.createElement("span");
				span.innerHTML = option[k].innerHTML;
				var b = document.createElement("b");
				var arrow = document.createElement("i");
				arrow.className = "icon-arrowdown";
				b.appendChild(arrow);
				dt.appendChild(span);
				dt.appendChild(b);
				dl.appendChild(dt);
			}
			else
			{
				var dd = document.createElement("dd");
				dd.index = k - 1;//之所以减去1，是因为第一次循环的时候，把索引k也给了dt，也就是if语句体部分，等到真正创建下拉选项的时候，索引其实已经是从1开始了，为了让咱们的索引从0开始计数，所以将其减去1
				dd.val = option[k].value;
				dd.clsName = "icon-" + option[k].className;
				dd.txt = option[k].innerHTML;
				dd.style.top = k * 3 + "px";
				dd.style.left = k + "px";
				dd.style.width = (300 - k * 2) + "px";
				dd.style.zIndex = m;
				
				var span = document.createElement("span");;
				span.innerHTML = option[k].innerHTML;
				var icon = document.createElement("i");
				icon.className = "icon-" + option[k].className;
				span.appendChild(icon);
				dd.appendChild(span);
				dl.appendChild(dd);
			}
			
			var par = dlList[i].parentNode;
			par.appendChild(dl);
			par.appendChild(input);
		}
	}
};