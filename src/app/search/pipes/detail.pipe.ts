import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'detail'
})
export class DetailPipe implements PipeTransform {
  transform(value: any): string {
    let description : string  = '';
    switch (value.type) {
      case 'track':
        description = `${value.album.artists[0].name} | ${value.album.name} | ${value.album.release_date} | ${ this.convertTime(value.duration_ms)} `
        break;
      case 'artist':
        let followers: string = value.followers.total;
        description = `${followers.toLocaleString()} seguidores | ${value.genres[0]}`
        break;
      case 'album':
        description = `${value.release_date} | ${value.total_tracks} canciones`
        break;
    }
    return description;
  }


  convertTime( time : number ): string {
    const minutes: number = Math.floor(time / 60000);
    const seconds: string = ((time % 60000) / 1000).toFixed(0);
    return minutes + ":" + (Number(seconds) < 10 ? '0' : '') + seconds;
  }
}
