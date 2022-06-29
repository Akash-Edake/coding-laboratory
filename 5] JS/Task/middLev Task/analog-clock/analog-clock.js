setInterval(() => {
	d = new Date(); //object of date()
	hr = d.getHours();
    deg=6;
	mn = d.getMinutes();
	sc = d.getSeconds();
	hr_rotation = 30 * hr + mn / 2; //converting current time
	min_rotation = 6 * mn;
	sec_rotation = 6 * sc;

	hour.style.transform = `rotate(${hr_rotation}deg)`;
	minute.style.transform = `rotate(${min_rotation}deg)`;
	second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
