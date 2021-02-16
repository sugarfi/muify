const file = document.getElementById('img');
const label = document.querySelector('label');
const submit = document.getElementById('submit');
const render = document.getElementById('render');
const svg = document.querySelector('svg');
const output = document.querySelector('img');

file.onchange = () => {
    label.textContent = file.files[0].name;
};

submit.onclick = () => {
    if (file.files[0]) {
        const reader = new FileReader();
        reader.onload = () => {
            render.setAttributeNS('http://www.w3.org/1999/xlink', 'href', reader.result);

            const svg_xml = new XMLSerializer().serializeToString(svg);
            const svg_b64 = btoa(svg_xml);
            output.src = 'data:image/svg+xml;base64,' + svg_b64;
        };
        reader.readAsDataURL(file.files[0]);
    }
};
