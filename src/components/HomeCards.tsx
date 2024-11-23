import Card from "./Card";

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card
            cardColor="bg-yellow-300"
            title="For Developers"
            comment="Browse our React jobs and start your career today"
            url="/jobs"
            linkText="Browse Jobs"
          ></Card>
          <Card
            cardColor="bg-red-300"
            title="For Employers"
            comment="List your job to find the perfect developer for the role"
            url="/add-job"
            linkText="Add Job"
          ></Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
