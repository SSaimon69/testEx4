const alph = "ABCDEFGH"

function createTable(){
	let table = document.querySelector("table");
	
	//Добавляем строчки и столбцы
	for (i = 0;i < 10;i++)
	{
		let tr = document.createElement("tr");
		
		for (j = 0;j < 10;j++)
		{
			let td = document.createElement("td");
			
			//Добавляем классы для заголовков таблицы
			if (i == 0 || i == 9) 
			{
				td.classList.add("topHeader");
				if (j > 0 && j < 9) td.textContent = alph[j-1];
			}
			if (j == 0 || j == 9) 
			{
				td.classList.add("bottomHeader");
				if (i > 0 && i < 9) td.textContent = i;
			}
			
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	paintNative();
	
}

function tdClick(event){
	let cell = event.target;
	if (cell.tagName.toLowerCase() != 'td') return;
	
	//Получаем индексы клетки
	let y = cell.parentNode.rowIndex;
	let x = cell.cellIndex;

	x = alph[x-1];
	y;
	
	//Сбрасываем все клетки
	paintNative();
	
	//Красим саму клетку в синий
	paintCell(x+y,"#0000ff");
	
	coords = calc(x+y);
	
	for(elem in coords)
	{
		paintCell(coords[elem],"#008000");
	}
}

function paintNative()
{
	let table = document.querySelector("table");
	for (i = 1; i < 9;i++)
	{
		for (j = 1; j < 9;j++)
		{
			if ((i + j) % 2 != 0) table.rows[i].cells[j].bgColor = "#000000";
			else table.rows[i].cells[j].bgColor = "#ffffff";
		}
	}
}

function paintCell(coord,color){
	
	//Координаты передаются в человечном виде (начиная с 1(А)). 
	//Но у нас есть заголовки которые нужно компенсировать.
	//Поэтому Y мы не трогаем. А X инкрементируем, так как он уже переведен в "массивный вид" (с 0)
	
	let x = parseInt(alph.indexOf(coord[0])) + 1; //инкремент делаем чтобы компенсировать заголовок
	let y = parseInt(coord[1]);
	
	let cell = document.querySelector("table").rows[y].cells[x];
	
	cell.bgColor = color;
}