import { useEffect,useState } from 'react';


const TelegramComponent = () => {
    interface UsrData {
        id: number;
        first_name: string;
        last_name?: string;
        username?: string;
        language_code: string;
        is_premium?: boolean;
      }
const [usrData,setUsrData] = useState<UsrData|null>(null)
  
    useEffect(() => {
    const telegram = window.Telegram.WebApp;
    if (telegram.initDataUnsafe.user) {
        setUsrData(telegram.initDataUnsafe.user as UsrData)
    } 
  }, []);

  return <div>Telegram Web App initialized!</div>;

//   return (
//     <main className="p-4">
//       {usrData ? (
//         <>
//           <h1 className="text-2xl font-bold mb-4">User Data</h1>
//           <ul>
//             <li>ID: {usrData.id}</li>
//             <li>First Name: {usrData.first_name}</li>
//             <li>Last Name: {usrData.last_name || 'N/A'}</li>
//             <li>Username: {usrData.username || 'N/A'}</li>
//             <li>Language Code: {usrData.language_code}</li>
//             <li>Is Premium: {usrData.is_premium ? 'Yes' : 'No'}</li>
//           </ul>
//         </>
//       ) : (
//         <div>Loading...</div>
//       )}
//     </main>
//   );

};

export default TelegramComponent;