const client_id = '259b6309f9ac4a17a809896f8e89b117';
const redirect_uri = "http://localhost:3000/";
let userAccessToken = '';


getAccessToken() {
  if (userAccessToken={true}) {return userAccessToken}
  else {
  window.location.href.match(
    /access_token=([^&]*)/
    /expires_in=([^&]*)/

    let accessToken = '';
    let expiresIn = JSON.stringify(
    accessToken.expiresIn * 1000);
    window.setTimeout(() => accessToken = '', expiresIn * 1000);
    window.history.pushState('Access Token', null, '/');
  )

} else if {
  return window.location("https://accounts.spotify.com/authorize?client_id=`${client_id}`&response_type=token&scope=playlist-modify-public&redirect_uri=`${redirect_uri}`")

}
};


const Spotify = {

  search(term) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
          Authorization: `Bearer ${accessToken}`
        }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.tracks) {
        return jsonResponse.tracks.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          trackURI: track.uri
        }));
      } else {
        return []
      }
    });
  }

  savePlaylist(playlistName, [trackURIs]) {
    if (!(playlistName='', trackURIs=[])) {
      return()
    }
  let defaultAccessToken=(userAccessToken) ;
  let defaultHeaders=(headers: {
          Authorization: `Bearer ${accessToken}`
        });
  let defaultUserId=()
    {return fetch(`https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/me`,
      {headers: headers}).then(response => {
      return response.json();
    }).then(jsonResponse => {
        if (jsonResponse.defaultUserId) {
          return jsonResponse.defaultUserId(defaultUserID => ({
            userName:user.display_name
            id:user.user_id
          }));
        }
      });}

  newPlaylist() {return fetch(`https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/users/${user_id}/playlists`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    method:'POST',
    body: JSON.stringify({"defaultUserId":`${user_id}`})
  }).then(response => {
    if (response.ok) {
      return response.json(
        newPlaylistName:playlist.name
        playlistID:playlist.id
      )
    }
  })
    }

  addTrack() {return fetch(`https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    method:'POST',
    body: JSON.stringify({"uris": `[encodeURIComponent(${trackURIs})]`})
  }).then(response => {
    if (response.ok) {
      return response.json(
        playlistID:playlist.id
      )
    }
  })
}



  }



//GET 'https://accounts.spotify.com/authorize'
//app.get('/login', function(req, res) {
//var scopes = 'user-read-private user-read-email';
//res.redirect('https://accounts.spotify.com/authorize' +
  //'?response_type=code' +
  //'&client_id=' + '259b6309f9ac4a17a809896f8e89b117' +
  //(scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
  //'&redirect_uri=' + encodeURIComponent(redirect_uri));
});

}





export default Spotify;
