export default {
  'GET /api/lessDataTable': (req: any, res: any) => {
    const dataSource = Array.from(new Array(6)).map((_val, i) => ({
      key: i,
      name: `小小${i}`,
      age: 32,
      address: '南京江宁南京江宁南京江宁南京江宁南京江宁南京江宁',
    }));

    setTimeout(() => {
      res.end(
        JSON.stringify({
          total: dataSource.length,
          data: dataSource,
        }),
      );
    }, 3000);
  },
  'GET /api/LargeDataTable': (req: any, res: any) => {
    const dataSource = Array.from(new Array(40)).map((_val, i) => ({
      key: i,
      name: `小小${i}`,
      age: 32,
      address: '南京江宁南京江宁南京江宁南京江宁南京江宁南京江宁',
    }));

    setTimeout(() => {
      res.end(
        JSON.stringify({
          total: dataSource.length,
          data: dataSource,
        }),
      );
    }, 3000);
  },
};
