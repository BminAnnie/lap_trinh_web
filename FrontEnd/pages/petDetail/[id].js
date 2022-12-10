import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PetInfo from "../../components/Pet/PetInfo";
const PetDetail = () => {
  const router = useRouter();
  const [dog, setDog] = useState([]);
  useEffect(() => {
    const getDog = async () => {
      const { id } = router.query;
      if (!id) return;
      const res = await axios.get("http://localhost:8080/dog", {
        params: { id },
        withCredentials: true,
      });
      setDog(res.data);
      console.log(res.data);
    };
    getDog();
  }, [router]);
  return (
    <div className="mt-[50px]">
      <div className="grid laptop:grid-cols-2">
        <div className="">
          <Image src={dog?.avatar} alt="" height={700} width={700} className="w-full h-auto rounded-[20px]" />
        </div>
        <PetInfo dog={dog} />
      </div>
    </div>
  );
};

export default PetDetail;
