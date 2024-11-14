(function() {
    const showcase = document.getElementById('showcase');
    if (!showcase) return;

    showcase.style.display = 'inline-flex';
    showcase.style.alignItems = 'center';
    showcase.style.position = 'relative';
    showcase.style.padding = '5px';
    showcase.style.borderRadius = '50px';
    showcase.style.border = '2px solid #e0e0e0';
    showcase.style.backgroundColor = 'white';

    const imageSize = 42;
    const overlap = 25;
    const totalWidth = imageSize * 5 - overlap * 4;

    for (let i = 1; i <= 5; i++) {
        const img = document.createElement('img');
        img.src = `https://loremfaces.net/42/id/${i}.png`;
        img.alt = `Profile ${i}`;
        img.style.width = `${imageSize}px`;
        img.style.height = `${imageSize}px`;
        img.style.borderRadius = '50%';
        img.style.border = '2px solid white';
        img.style.position = 'relative';
        img.style.zIndex = i;
        img.style.marginLeft = i === 1 ? '0' : `-${overlap}px`;
        showcase.appendChild(img);
    }

    showcase.style.width = `${totalWidth + 10}px`; // Add 10px for padding

   
})();
