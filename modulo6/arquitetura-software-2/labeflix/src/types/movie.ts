export class Movie{
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private duration_in_minutes: number,
        private  year_of_release: number,
      ) { }
      
      getId(): string {
        return this.id
      }
    
      getTitle(): string {
        return this.title
      }
    
      getdescription(): string {
        return this.description
      }
    
      getDurationInMinutes(): number {
        return this. duration_in_minutes
      }

      getYearOfRelease(): number{
        return  this.year_of_release
      }
    
      setId(newId: string): void {
        this.id = newId
      }
    
      setTitle(newTitle: string): void {
        this.title = newTitle
      }
    
      setDescription(newDescription: string): void {
        this.description = newDescription
      }
    
      setdurationInMinutes(newDurationInMinutes: number): void {
        this.duration_in_minutes = newDurationInMinutes
      }

      setYearOfRelease(newYearOfRelease: number): void {
        this. year_of_release = newYearOfRelease
      }
}