<template>
  <!-- eslint-disable -->
  <div>
    <div class="containerArticle">
      <v-container grid-list-md>
        <v-layout row wrap>

          <v-flex md1>

          </v-flex>

          <v-flex md10>
            <v-card>
            <v-card-media src="https://picsum.photos/965/200/?random" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <div id="content">
                <h3 class="display-1 mb-1 mx-auto">{{title}}</h3>
                <div class="headline mb-1">{{subtitle}}</div>
                <div class="mb-4 subheading">{{body}}</div>
              <div class="mb-2 subheading">{{conclusion}}</div>
              <div class="body-2">
                source: <div class="sources" v-for="source in sources"><a v-bind:href="source.href">{{source.link}}</a></div>
              </div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>

          <v-flex md1>

          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
  <!-- eslint-enable -->
</template>

<script>
export default {
  data: () => ({
    title: 'je suis un titre',
    subtitle: 'et moi un soustitre',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    conclusion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    sources: [{
      href: 'http://google.com',
      link: 'lien'
    },
    {
      href: 'http://googless.com',
      link: 'liess'
    }
    ]
  })
}
</script>

<style scoped>
  #content{
    width: 100%;
    height: 100%;
    text-align: justify;
  }
  .sources{
    display: inline-block;
    margin-right: 0.5em;
  }
</style>
