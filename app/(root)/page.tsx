import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalbalanceBox from '@/components/TotalbalanceBox'


const Home = () => {
  const loggedIn = { firstName: "Emmanuel", lastName: "Excellent", email: "emma@gmail.com" }
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage ypour account  and ransactions efficiently."
          />
          <TotalbalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
        user = {loggedIn} 
        transactions = {[]}
        banks = {[{ currentBalance: 123.50},{ currentBalance: 500 }]}
      />
    </section>
  )
}

export default Home