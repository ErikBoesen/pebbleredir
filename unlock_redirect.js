console.log('Redirecting to Rebble documentation.');
document.body.innerHTML = 'Redirecting...';
var loc = window.location.href,
    split_loc = loc.split('/');
split_loc.splice(2, 0, 'developer.rebble.io');
split_loc.push('index.html');
window.location.href = split_loc.join('/');
