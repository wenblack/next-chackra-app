// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  gender: string,
  homeworld: string, // The URL of a planet resource, a planet that this person was born on or inhabits.
  films: Array<String>,// An array of film resource URLs that this person has been in.
  birth_year?: string,
  eye_color?: string,
  hair_color?: string, // The hair color of this person. Will be "unknown" if not known or "n/a" if the person does not have hair.
  height?: string, // The height of the person in centimeters.
  mass?: string, // The mass of the person in kilograms.
  skin_color?: string,  // The skin color of this person.
  species?: Array<String>, // An [] of species resource URLs that this person belongs to.
  starships?: Array<String>,// An [] of starship resource URLs that this person has piloted.
  vehicles?: Array<String>, // An array of vehicle resource URLs that this person has piloted.
  url?: string // the hypermedia URL of this resource.
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(
    {
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
      "homeworld": "https://swapi.dev/api/planets/1/",
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
      ],
    },

  )
}
