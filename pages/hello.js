import { notion } from "@/lib/notion";

export async function getServerSideProps(){
    const data = notion.databases.query()
}

export default function Hello(){

}