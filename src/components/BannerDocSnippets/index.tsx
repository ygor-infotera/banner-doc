import CodeBlock from "@theme/CodeBlock";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";

export const ListResponseJSON = () => (
  <CodeBlock language="json">{`{
  "qtPaginas": 1,
  "qtRegistro": 5,
  "itTopVendaList": [
    {
      "id": 23320,
      "dsTags": null,
      "dtEntrada": null,
      "dtSaida": null,
      "nmTopVenda": "Banner Emirados",
      "dsUrlImg": null,
      "dsUrlImgDetalhe": "testeimagem.com.br",
      "stManual": true,
      "nrParcela": 1,
      "dsDestaque": "",
      "dsBanner": "A",
      "vlTotal": 0.0,
      "vlTotalTaxa": 0.0,
      "sgMoeda": "R$",
      "idPacote": null,
      "tpOrigem": null,
      "sgOrigem": null,
      "nmOrigem": null,
      "idOrigem": null,
      "tpDestino": null,
      "sgDestino": null,
      "nmDestino": "Dubai, , Emirados Árabes Unidos",
      "idDestino": 35895,
      "idHotel": null,
      "idEmpresa": 1,
      "dsReservaTipo": "PACOTE DE HOTEL",
      "dtInclusao": "2022-01-04T15:13:53Z",
      "dtValidade": "2022-01-21T00:00:00Z",
      "idUnidade": 3850,
      "idPontoVenda": null,
      "WSTopVenda": null
    }
  ]
}`}</CodeBlock>
);

export const BannerResponseJSON = () => (
  <CodeBlock language="json">{`{
  "id": 23320,
  "dsTags": null,
  "dtEntrada": null,
  "dtSaida": null,
  "nmTopVenda": "Banner Teste Dubai",
  "dsUrlImg": null,
  "dsUrlImgDetalhe": "teste.com.br/212.png",
  "stManual": true,
  "nrParcela": 1,
  "dsDestaque": "",
  "dsBanner": "A",
  "vlTotal": 0.0,
  "vlTotalTaxa": 0.0,
  "sgMoeda": "R$",
  "idPacote": null,
  "tpOrigem": null,
  "sgOrigem": null,
  "nmOrigem": null,
  "idOrigem": null,
  "tpDestino": null,
  "sgDestino": null,
  "nmDestino": "Dubai, , Emirados Árabes Unidos",
  "idDestino": 35895,
  "idHotel": null,
  "idEmpresa": 1,
  "dsReservaTipo": "PACOTE DE HOTEL",
  "dtInclusao": "2022-01-04T15:13:53Z",
  "dtValidade": "2022-01-21T00:00:00Z",
  "idUnidade": 3850,
  "idPontoVenda": null,
  "WSTopVenda": "{\\"topVendaId\\":23320,\\"dsUrlBannerDetalhe\\":\\"http://media.infotravel.com.br/image/upload/c_scale,h_200/1D3A0CCFD872B23D641EA23DFD16E7AF.jpg\\",\\"imagenBannerList\\":[],\\"sgMoeda\\":\\"R$\\",\\"vlTotal\\":0.0,\\"reservaPacote\\":{\\"keyPacoteParametro\\":\\"}{}{}{}{}{}{}{}{#|#F41FC8857F1BFF94DEFB4043BF159C6E\\",\\"destino\\":{\\"idLocal\\":35895,\\"nmLocal\\":\\"Dubai, , Emirados Árabes Unidos\\",\\"nmAmigavel\\":\\"\\",\\"stPoligono\\":false},\\"vlComissaoAjuste\\":0.0,\\"stSelecionado\\":false},\\"dsBanner\\":\\"A\\",\\"dsDestaque\\":\\"\\",\\"nmBanner\\":\\"Banner Principal - Mundial Emirados\\",\\"dsReservaTipo\\":\\"PACOTE DE HOTEL\\",\\"sgReservaTipo\\":\\"PACHOT\\",\\"dsTag\\":\\"\\",\\"stManual\\":true,\\"qtParcela\\":1,\\"cdChave\\":\\"DC0B49F16DCCE8D45D85B01CD65FDBC7\\"}"
}`}</CodeBlock>
);

export const B2CLinkCheckout = () => (
  <CodeBlock language="javascript">{`let topVenda = rs[0];
// DOMINIO DO B2C é o link em que o B2C roda
// MD5 funçao para criptogragar para MD5
let link = \`DOMINIO B2C /checkout?idTopVenda=\${topVenda.id}&chave=\${md5(topVenda.id).toUpperCase()}\`;`}</CodeBlock>
);

export const B2CLinkSearch = () => (
  <CodeBlock language="javascript">{`let topVenda = rs[0];
// QUANTIDADE DE PAX.
// por padrão no banner sao sempre 2 pax. Mas é possivel passar outras configurações
let qtPax = 2;
// exemplo de link
// https://linkb2c.com.br/b2c/banner/{idBanner}/{numeroDePax}
let link = \`DOMINIO B2C /banner/\${topVenda.id}/\${qtPax}\`;`}</CodeBlock>
);

export const B2BFormExample = () => (
  <CodeBlock language="html">{`// URL DO INFOTRAVEl - DOMINIO DO INFOTRAVEL ex:
// https://demo.infotravel.com.br/infotravel/public/login.xhtml
<form
  action="[URL DO INFOTRAVEL]"
  id="frmTopVenda"
  method="POST"
  name="frmTopVenda"
>
  <input id="topVenda" name="topVendaId" type="hidden" value="[ID DO BANNER]" />
  <button class="btn btn-outline-secondary btn-comprar" type="submit">
    COMPRE AGORA
  </button>
</form>`}</CodeBlock>
);

export const B2BWindowOpen = () => (
  <CodeBlock language="javascript">{`window.open("[URL DO INFOTRAVEL]/public/login.xhtml?topVendaId=54");`}</CodeBlock>
);

export const CodeExamples = () => (
  <Tabs>
    <TabItem value="js" label="JavaScript">
      <CodeBlock language="javascript">{`await fetch(
  "https://motorv2.infotravel.com.br/integra/api/topVenda?clientSg=TESTESG",
  {
    method: "get",
    headers: {
      Accept: "application/json",
    },
  },
);`}</CodeBlock>
    </TabItem>
    <TabItem value="php" label="PHP">
      <CodeBlock language="php">{`$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_URL => 'http://motorv2.infotravel.com.br/integra/api/topVenda?clientSg=TESTESG',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_CUSTOMREQUEST => 'GET',
));
$response = curl_exec($curl);
curl_close($curl);
echo $response;`}</CodeBlock>
    </TabItem>
    <TabItem value="java" label="Java">
      <CodeBlock language="java">{`OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("http://motorv2.infotravel.com.br/integra/api/topVenda?clientSg=TESTESG")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();`}</CodeBlock>
    </TabItem>
    <TabItem value="python" label="Python">
      <CodeBlock language="python">{`import requests

url = "http://motorv2.infotravel.com.br/integra/api/topVenda?clientSg=TESTESG"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)`}</CodeBlock>
    </TabItem>
  </Tabs>
);
