import { Component, useEffect } from 'react';
import { useState } from 'react';
/**
 * @HOC to Add Props
 */
// const withMessage = (Component) => (props) => (
//     <div>
//         <Component {...props} message="Hello World" />
//     </div>
// );

/** HOC for Logging */
const withMessage = (Component) => {
  return (props) => {
    useEffect(() => {
      console.log('useEffect');
      return () => {
        console.log('useEffect cleanup');
      };
    }, []);
    return <Component {...props} />;
  };
};

/**HOC for Authentication */
const withAuth = (Component) => {
  return (props) => {
    const isAuth = false;
    if (!isAuth) {
      return <div>Please Log in to view the page</div>;
    }
    return <Component {...props} />;
  };
};

/**HOC for Data Fetching */
const withDataFetching = (Component, fetchData) => {
  return (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      const fetchDataAsync = async () => {
        try {
          const result = await fetchData();
          setData(result);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      fetchDataAsync();
    }, []);
    return <Component data={data} loading={loading} error={error} {...props} />;
  };
};

const DataDisplay = ({ data, loading, error }) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>Data: {data}</div>;
};

const Dashboard = () => {
  return <div>Welcome to the Dashboard</div>;
};

const ProtectedDashboard = withAuth(Dashboard);

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 1000);
  });
};

const EnhancedFetchComponent = withDataFetching(DataDisplay, fetchData);

const Mycomponent = () => {
  return <div>My Component</div>;
};

//const EnhancedComponent = withMessage(Mycomponent)
// const HOCSample = () => {
//     return <EnhancedComponent />
// }

// const HOCSample = () => {
//     return <ProtectedDashboard />
// }

const HOCSample = () => {
  return <EnhancedFetchComponent />;
};

export default HOCSample;
