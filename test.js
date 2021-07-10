// make a random circle with random color html 5 svg

var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('width', '100%');
svg.setAttribute('height', '100%');
svg.setAttribute('viewBox', '0 0 100 100');

var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle.setAttribute('cx', 50);
circle.setAttribute('cy', 50);
circle.setAttribute('r', 50);
circle.setAttribute('fill', 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')');

svg.appendChild(circle);

document.body.appendChild(svg);
