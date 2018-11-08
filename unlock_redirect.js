console.log('Switching to user 1!');
document.body.innerHTML = 'Redirecting...';
var loc = window.location.href,
    split_loc = loc.split('/');
split_loc.splice(2, 0, 'developer.rebble.io');
split_loc.pop();
split_loc.push('index.html');
window.location.href = split_loc.join('/');
