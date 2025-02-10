import PeopleList from './components/PeopleList'

function Dashboard(props) {
  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={props.peopleList} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={props.hiredPeople} />
      </section>
    </main>
  )
}

export default Dashboard
