<template>
  <div id="parameter">
    <div class="container">
      <h2>Paramètre du compte</h2>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex md6 xs12>
            <ul>
              <li>
                <v-layout row wrap>
                  <v-flex md2 xs12>
                    Prénom:
                  </v-flex>
                  <v-flex md9 xs12>
                    <input type="text" v-model="this.account.firstname">
                  </v-flex>
                </v-layout>
              </li>
              <li>
                <v-layout row wrap>
                  <v-flex md2 xs12>
                    Nom:
                  </v-flex>
                  <v-flex md9 xs12>
                    <input type="text" v-model="this.account.lastname">
                  </v-flex>
                </v-layout>
              </li>
              <li>
                <v-layout row wrap>
                  <v-flex md2 xs12>
                    Pseudo:
                  </v-flex>
                  <v-flex md9 xs12>
                    <input type="text" v-model="this.account.pseudo">
                  </v-flex>
                </v-layout>
              </li>
              <li>
                <v-layout row wrap>
                  <v-flex md2 xs12>
                    Email:
                  </v-flex>
                  <v-flex md9 xs12>
                    <input type="text" v-model="this.account.email">
                  </v-flex>
                </v-layout>
              </li>
              <li>
                <v-layout row wrap>
                  <v-flex md2 xs12>
                    Password:
                    <button @click="unlockPassword()" class="transition" :class="stylus">
                      <v-icon color="purple" class="transition" v-if="lock">lock</v-icon>
                      <v-icon color="purple" v-else>lock_open</v-icon>
                    </button>
                  </v-flex>
                  <v-flex md9 xs12>
                    <input v-if="lock" type="password" class="transition" :class="stylus" value="         ">
                    <span v-else>
                      <input type="password" placeholder="ancien mot de passe" class="transition" :class="stylus" v-model="this.account.oldpassword"><br>
                      <input type="password" placeholder="nouveau mot de passe" class="transition" :class="stylus" v-model="this.account.newpassword"><br>
                      <input type="password" placeholder="nouveau mot de passe" class="transition" :class="stylus" v-model="this.account.verifpassword">
                    </span>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-btn @click="updateData()">
                      test
                    </v-btn>
                  </v-flex>
                </v-layout>
              </li>
            </ul>
          </v-flex>
        </v-layout>
      </v-container>

    </div>
  </div>
</template>
<script>
export default {
  name: 'Parameter',
  data: () => ({
    lock: true,
    stylus: '',
    account: {
      firstname: '',
      lastname: '',
      pseudo: '',
      email: '',
      oldpassword: '',
      newpassword: '',
      verifpassword: ''
    }
  }),
  methods: {
    unlockPassword () {
      this.stylus = 'transitionActive'
      setTimeout(() => {
        this.stylus = ''
        if (this.lock === true) {
          this.lock = false
        } else {
          this.lock = true
        }
      }, 1000)
    },
    updateData () {
      console.log(this.$store.getters)
    }
  },
  mounted () {
    this.account.firstname = this.$store.getters.getFirstName
    this.account.lastname = this.$store.getters.getLastName
    this.account.pseudo = this.$store.getters.getPseudo
    this.account.email = this.$store.getters.getEmail
  }
}
</script>
<style scoped>
#parameter .container ul li{
  text-align:left;
  padding-top:10px;
  padding-bottom:10px;
}
#parameter .container ul li input{
  background:rgb(250,251,252);
  border:1px solid rgb(209,213,218);
  border-radius:3px;
  width:100%
}
.transition{
  transition: opacity 1s ease-in-out
}
.transitionActive{
  opacity:0
}
</style>
