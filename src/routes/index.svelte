<script>

    let nav = [
        'My Spreads',
        'Contributors',
        'Payout',
        'Logout'
    ]

</script>

<section class="flex h-full">
    <!-- navigation section -->
    <section class="w-1/4 bg-nav pl-20">

        <div class="flex gap-4  pt-6 pl-4">
            <img class="w-16 h-16 rounded" src="./favicon.png" alt="" srcset="">
            <div class="flex flex-col ">
                <h2 class="text-white-400">@AverageAndrea</h2>
                <p class="text-white-100">Joined 2 days ago</p>
            </div>

        </div>

        <hr class=" border-white-100 w-full mt-4">

        <nav>
            <ul class="text-white-400 mt-4">
                {#each nav as n}
                <li class="mt-4 flex text-left pl-4">{n}</li>
                <hr class=" border-white-100 w-full mt-4">
                {/each}
               
            </ul>
        </nav>

        <div class="flex gap-2 absolute bottom-14">
            <img class="w-12 h-12" src="./favicon.png" alt="">
            <h1 class="text-white-400 text-xl">spread</h1>
        </div>

    </section>

    <!-- main section -->
    <section class="w-3/4 bg-main">

    </section>
</section>
