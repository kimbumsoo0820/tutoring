import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

 const UserCardSkeleton = () => (
    <div >
      <Skeleton height={30} width={200} style={{marginTop:"20px"}}/>
      <Skeleton height={30} width={200} style={{marginTop:"30px"}}/>
      <Skeleton height={30} width={200} style={{marginTop:"10px"}}/>
    </div>
  );

  export default UserCardSkeleton