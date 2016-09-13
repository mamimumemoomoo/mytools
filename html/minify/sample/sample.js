var old = '';

function update() {
	var textarea = document.f.ta;
	var d = parent.dynamicframe.document; 

	if (old != textarea.value)
	{
	old = textarea.value;

	d.open();
	d.write(old);
	d.close();
	}

	window.setTimeout(update, 150);
}
