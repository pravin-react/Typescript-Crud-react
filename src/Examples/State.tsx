import {useEffect, useState} from 'react';
import { Product } from './interface';

const State = () => {
  // 👇️ const employee: {name: string; salary: number;}
  const [employee, setEmployee] = useState<Product>({
    name: '',
    price: 0,
    stock:false
  });

  useEffect(() => {
    return setEmployee({ name: 'James', price: 100,stock:true });
  }, []);

  return (
    <div>
      <h2>Name: {employee.name}</h2>
      <h2>Salary: {employee.price}</h2>
    </div>
  );
};

export default State;