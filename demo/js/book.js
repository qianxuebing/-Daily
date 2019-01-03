window.onload = function()
{
	var pagecont = document.getElementById("pagecont");
	var page = pagecont.getElementsByTagName("div");
	var deg = 0;
	
	for(var i = 0, j = page.length, len = j - 1; i < j; i++)
	{
		page[i].index = i;
		page[i].onclick = function()
		{
			for(var i = 0; i <= len; i++)
			{
				if(this.index == len)//判断是不是点击的左后一个元素
				{
					deg = i * 15 - Math.ceil(len / 2 * 15);
					page[i].style.cssText = '-webkit-transform:rotate(' + deg + 'deg); -moz-transform:rotate(' + deg + 'deg); -o-transform:rotate(' + deg + 'deg); -ms-transform:rotate(' + deg + 'deg); transform:rotate(' + deg + 'deg);';
				}
				else
				{
					
				}
			}
		}
	}
};