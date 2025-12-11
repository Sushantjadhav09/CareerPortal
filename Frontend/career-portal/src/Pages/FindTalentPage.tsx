import { Divider } from '@mantine/core'
import SearchBar from '../FindTalent/SearchBar'
import Talent from '../FindTalent/Talent'

const FindTalentPage = () => {
  return (
   <div className="min-h-screen bg-gray-800 font-['poppins']">
      <SearchBar/>
      <Divider size="xs" mx="md" />
      <Talent/>
    </div>
  )
}

export default FindTalentPage