<script>
  import 'bulma/css/bulma.css'
  import { Tabs, Tab } from 'svelma'
  import login from './login'
  import { arweave } from './Arweave';

  let wallet = null;
  let address = null;

  const updateWallet = (newWallet) => {
    wallet = newWallet;
    arweave.wallets.jwkToAddress(wallet)
      .then(a => address = a);
  }
</script>

<style>
h1 { 
  text-align: center;
  font-weight: 300;
  font-size: 50px;
  color: #636363;
}
</style>

<link
  id="external-css"
  rel="stylesheet"
  type="text/css"
  href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
  media="all"
/>

<h1>OpenPapers</h1> 
<Tabs size="is-medium" position="is-centered" style="is-fullwidth">
  <Tab label="Latest" icon="hourglass-half">
  </Tab>

  <Tab label="Popular" icon="fire">
  </Tab>

  <Tab label="Login" icon="users">
    {#if wallet}
      <p>Logged in as: {address}</p>
    {:else}
      <input type="file" id="file" on:change={(e) => login(e.target.files, updateWallet)} >
      <div id="desc">Drop a keyfile to login.</div>
    {/if}
  </Tab>

</Tabs>