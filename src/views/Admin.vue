<template>
 <div class="admin">
     <div class="container">
         <h2>Administration</h2>
         <div class="admin-info">
             <h2>Add Admin</h2>
             <div class="input">
                 <input placeholder="Enter a user email to make them admin" type="text" id="addAdmins" v-model="adminEmail" />
             </div>
             <span>{{ this.functionMsg }}</span>
             <button class="button"> Submit</button>
         </div>
     </div>
 </div>
</template>

<script>
export default {
name: "Admin",
data(){
    return{
        adminEmail: "",
        functionMsg: null,
    };
},
};
</script>

<style lang="scss" scoped>
.admin{
    .container{
    max-width: 1000px;
    padding: 60px 25px;

    h2{
        text-align: center;
        margin-bottom: 16px;
        font-weight: 300;
        font-size: 32px;
    }

    .admin-info{
        border-radius: 10px;
        box-shadow:  4px 6px -1px rgba(0, 0, 0, 0.1) , 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        padding: 32px;
        background-color:#d0f0c0a8;
        display: flex;
        flex-direction: column;
        max-width: 600px;
        margin: 32px auto;

        span{
            font-size: 14px;
        }
        .input{
            margin: 16px 0;

            label{
                font-size: 14px;
                display: block;
                padding-bottom: 6px;
            }
            input{
                width: 100%;
                border: none;
                background-color: white;
                padding: 8px;
                height: 50px;
                @media (max-width: 900px) {
                    
                }
                &:focus{
                    outline: none;
                }
            }
        }
        button{
            align-self: center;
        }
    }
  }
}
</style>