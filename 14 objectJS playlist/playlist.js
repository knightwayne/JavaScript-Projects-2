
function Playlist(){
    Playlist.songs = [];
    Playlist.nowPlayingIndex = 0;

}

Playlist.prototype.add = function(song){
    this.songs.push(song);
}

Playlist.prototype.play = function(){
    this.songs[nowPlayingIndex].isPlaying = true;
}

Playlist.prototype.stop = function(){
    this.songs[nowPlayingIndex].isPlaying = false;
}

Playlist.prototype.next = function(){
    nowPlayingIndex++;
}

Playlist.prototype.renderIn = function(){
    
}

