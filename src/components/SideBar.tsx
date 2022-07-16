import { memo } from 'react'
import { Button } from './Button'

type Genres = {
  id: number
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
  title: string
}

interface SideBarProps {
  genres: Genres[]
  selectedGenreId: number
  buttonClickCallback: (args: any) => void
}

export function SideBar({
  genres,
  selectedGenreId,
  buttonClickCallback,
}: SideBarProps) {
  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>

      <div className='buttons-container'>
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => buttonClickCallback(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}