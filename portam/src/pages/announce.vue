<template>
  <f7-page>
     <f7-navbar title="Anuncia" back-link="Enrere" back-link-url="/home/"></f7-navbar>
     <f7-list form>
      <f7-list-item>
        <f7-label>Ets</f7-label>
        <f7-input type="select">
          <option selected>Conductor</option>
          <option>Passatger</option>
        </f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Origen</f7-label>
        <f7-input type="text" placeholder="Direcció"></f7-input>
      </f7-list-item>
      <f7-list-item>
          <f7-label>Hora de sortida</f7-label>
        <f7-input type="time" placeholder="Hora"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Destí</f7-label>
        <f7-input type="text" placeholder="Direcció"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Data</f7-label>
        <f7-input type="date" placeholder="Birth date"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Comentaris</f7-label>
        <f7-input type="textarea" placeholder="Comentaris, casos extraordinaris, etc."></f7-input>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
    export default {}
</script>