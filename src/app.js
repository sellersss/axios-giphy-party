$('#search').on('click', getGif);
$('#remove').on('click', removeGifs, getGif);

async function getGif() {
  let searchInput = $('input').val();
  let res = await axios.get(`http://api.giphy.com/v1/gifs/search`, {
    params: { q: searchInput, api_key: 'IrVZnxZ8yyKSZNWQ4nsYUfzVkkpcaJ0R' },
  });
  addGif(res.data.data[0].images.fixed_height.url);
  $('input').focus(function () {
    $(this).val('');
  });
}

function addGif(gifSrc) {
  let $gifImg = $('<img>').attr('src', gifSrc);
  $('.gifs').append($gifImg);
}

function removeGifs() {
  $('.gifs').empty();
}
