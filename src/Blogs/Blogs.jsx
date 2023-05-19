const Blogs = () => {
  return (
    <div className="text-center">
      <div className="divider"></div>
      <div>
        <p className="text-xl font-semibold">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </p>
        <p className="text-lg">
          Answer: An access token is a token which is needed to access
          confidential data from a server. Refresh token is used to regenerate
          access token once it is expired. Access token & refresh token are
          generated in the server when a user logins in the client and every
          time user request something to the server, the request hit with the
          token and refresh token is used for regenerated access token same as
          that. In the http only cookies of the client-side.
        </p>
      </div>
      <div className="divider"></div>
      <div>
        <p className="text-xl font-semibold">
          2. Compare SQL and NoSQL databases.
        </p>
        <p className="text-lg">
          Answer: The main difference is SQL has table and NoSQL has document.
          SQL is relation database where NoSQL is not. SQL is better for
          multi-row transaction and NoSQL is better for unstructured data.
        </p>
      </div>
      <div className="divider"></div>
      <div>
        <p className="text-xl font-semibold">
          3. What is express js? What is Nest JS?
        </p>
        <p className="text-lg">
          Answer: Express JS is a framework of JavaScript Run Time Node JS. Next
          JS is a also a framework of it but micro framework and acts as Angular
          JS for the backend.
        </p>
      </div>
      <div className="divider"></div>
      <div>
        <p className="text-xl font-semibold">
          4. What is MongoDB aggregate and how does it work?
        </p>
        <p className="text-lg">
          Answer: MongoDB Aggregate is a way of processing a large number of
          documents in a collection by means of passing them through different
          stages for filter them, count them etc. Takes input then match it next
          group it after that sort it and shows the output through pipeline.
        </p>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Blogs;
