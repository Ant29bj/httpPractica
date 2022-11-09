export class SearchResult{
  id: string;
  title: string;
  description: string;
  thumbUrl: string;
  videoUrl: string;

  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.title = obj && obj.title || null;
    this.description = obj && obj.description || null;
    this.thumbUrl = obj && obj.thumbUrl || null;
    this.videoUrl = obj && obj.videoUrl ||
      `http://www.youtube.com/watch?v=${this.id}`;
  }
}
