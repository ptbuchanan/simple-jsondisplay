import { Products } from './components/products';
import contents from './content';

export default function App() {
    return(
           <div className='App'>
               {contents.map(contents => (
                   <Products 
                       key={contents.id}
                       image={contents.image}
                       name={contents.name}
                       year={contents.year}
                       totalSales={contents.totalSales}
                       timeLeft={contents.timeLeft}
                       rating={contents.rating}
                   />
               ))}
           </div>
    )
}