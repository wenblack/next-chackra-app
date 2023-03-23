export interface PeopleProps {
  name: string
  birth_year?: string
  eye_color?: string
  gender: string
  hair_color?: string // The hair color of this person. Will be "unknown" if not known or "n/a" if the person does not have hair.
  height?: string // The height of the person in centimeters.
  mass?: string // The mass of the person in kilograms.
  skin_color?: string  // The skin color of this person.
  homeworld: string // The URL of a planet resource, a planet that this person was born on or inhabits.
  films: Array<String>// An array of film resource URLs that this person has been in.
  species?: Array<String> // An [] of species resource URLs that this person belongs to.
  starships?: Array<String>// An [] of starship resource URLs that this person has piloted.
  vehicles?: Array<String> // An array of vehicle resource URLs that this person has piloted.
  url?: string // the hypermedia URL of this resource.
}
