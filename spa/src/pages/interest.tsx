import { LayoutDefault } from '@/components/organisms/layout-default'
import { PersonalInterests } from '@/components/organisms/personal-interests';

export function Interest() {
  return (
    <LayoutDefault>
      <div>
        <h1>Interesses</h1>
        <PersonalInterests />
      </div>
    </LayoutDefault>
  )
}
