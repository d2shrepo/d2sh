// نفس البداية:
const categoriesContainer = document.getElementById('categories');

categories.forEach((cat, index) => {
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `<img src="${cat.icon}" alt="${cat.name}"><p>${cat.name}</p>`;
  div.onclick = () => openCategory(index);
  categoriesContainer.appendChild(div);
});

function openCategory(index) {
  const cat = categories[index];
  document.body.innerHTML = `
    <button onclick="location.reload()" style="margin: 15px; padding: 10px 20px;">رجوع</button>
    <h1>${cat.name} - القنوات</h1>
    <video id="player" width="90%" controls autoplay style="margin-bottom: 20px;"></video>
    <div class="grid" id="channelList"></div>
  `;

  const player = document.getElementById('player');
  const channelList = document.getElementById('channelList');

  cat.channels.forEach(channel => {
    const c = document.createElement('div');
    c.className = 'card';
    c.innerHTML = `<p>${channel.name}</p>`;
    c.onclick = () => player.src = channel.url;
    channelList.appendChild(c);
  });

  if (cat.channels[0]) player.src = cat.channels[0].url;
}